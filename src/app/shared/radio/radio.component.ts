import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { RadioOption } from "./radio-option.model";

@Component({
  selector: "mt-radio",
  templateUrl: "./radio.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() options: RadioOption[];
  value: string;
  @Output() emitter = new EventEmitter<string>();
  onChange: any;

  constructor() {}

  ngOnInit() {}

  setValue(value: string) {
    this.value = value;
    this.emitter.emit(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  // @param isDisabled

  setDisabledState?(isDisabled: boolean): void {}
}
