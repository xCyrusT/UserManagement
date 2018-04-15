import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fb-input',
  templateUrl: './fb-input.component.html',
  styleUrls: ['./fb-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbInputComponent implements OnInit {

  @Input() control: any;
  @Input() placeholder: string;
  @Input() type;
  @Input() model;

  constructor() { }

  ngOnInit() {
  }

}
