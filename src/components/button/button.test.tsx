import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './button';

test('버튼을 클릭했을때 onClick이 제대로 실행되어야한다.', async () => {
  const user = userEvent.setup();

  const handleClick = vi.fn();

  const { getByRole } = render(<Button onClick={handleClick}>test</Button>);

  expect(handleClick).toHaveBeenCalledTimes(0);

  await user.click(getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
