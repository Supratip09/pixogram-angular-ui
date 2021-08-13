import { TestBed } from '@angular/core/testing';

import { FileStreamService } from './file-stream.service';

describe('PhotoGalleryService', () => {
  let service: FileStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
