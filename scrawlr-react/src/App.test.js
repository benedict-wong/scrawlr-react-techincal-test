import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpvoteList from './scripts/UpvoteList';

test('active/inactive changes based on the click event', () => {
  const onToggleActive = jest.fn();
    const {getByRole, rerender} = render(
        <UpvoteList index={0} active={false} onToggleActive={onToggleActive}/>
    )

    // Expect the container to be inactive on base state
    const container = getByRole('list').parentElement
    const list = getByRole('list')
    expect(container).toHaveClass('inactive');


    // Click once, expect onToggleActive to be called once
    fireEvent.click(list)
    expect(onToggleActive).toHaveBeenCalledTimes(1);

    // Expect the container to be active after the click
    rerender(<UpvoteList index={0} active={true} onToggleActive={onToggleActive} />, {container})
    expect(container).toHaveClass('active');

    // Click a second time, expect onToggleActive to be called a second time
    fireEvent.click(list)
    expect(onToggleActive).toHaveBeenCalledTimes(2);

    // Expect the container to be inactive after the second click
    rerender(<UpvoteList index={0} active={false}  onToggleActive={onToggleActive}/>, {container})
    expect(container).toHaveClass('inactive');

})

