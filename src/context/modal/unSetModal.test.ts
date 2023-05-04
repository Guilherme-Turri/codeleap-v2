import { unSetModal } from './unSetModal'
import { closeModal } from '../../store/modal/modal'

describe('closeModal', () => {
  it('should put on store with no params', () => {
    const dispatch = jest.fn();
    unSetModal( dispatch)
    expect(dispatch).toHaveBeenCalledWith(closeModal());
  })
})