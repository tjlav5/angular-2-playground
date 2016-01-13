import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ang2App} from '../app/ang2';

beforeEachProviders(() => [Ang2App]);

describe('App: Ang2', () => {
  it('should have the `defaultMeaning` as 42', inject([Ang2App], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ang2App], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

