import { BackfooterModule } from './backfooter.module';

describe('BackfooterModule', () => {
  let backfooterModule: BackfooterModule;

  beforeEach(() => {
    backfooterModule = new BackfooterModule();
  });

  it('should create an instance', () => {
    expect(backfooterModule).toBeTruthy();
  });
});
