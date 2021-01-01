import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<string[]>({
  name: 'testStore',
  defaults: ['testStore']
})
@Injectable()
export class TestStore {}
