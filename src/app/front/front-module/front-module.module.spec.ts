import { FrontModuleModule } from './front-module.module';

describe('FrontModuleModule', () => {
  let frontModuleModule: FrontModuleModule;

  beforeEach(() => {
    frontModuleModule = new FrontModuleModule();
  });

  it('should create an instance', () => {
    expect(frontModuleModule).toBeTruthy();
  });
});
