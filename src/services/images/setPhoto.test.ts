import { setPhoto } from './photo';
import * as setPhotoTest from './photo'

describe('SetPhoto/Firebase', () => {
  const spyPhotoFireBase = jest.spyOn(setPhotoTest, 'setPhoto')
  it('should return a URL from Firebase', async () => {
    const mockFile = new File(['test content'], 'test.png', { type: 'image/png' });
    spyPhotoFireBase.mockResolvedValue('https://example.com/image.png');
    const result = await setPhoto(mockFile);
    expect(typeof result).toBe('string');
  });
});