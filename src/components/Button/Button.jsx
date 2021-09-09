import { Button } from './Button.styled';

function LoadMoreButton({ click }) {
  return (
    <>
      <Button onClick={click}>Load More</Button>
    </>
  );
}

export default LoadMoreButton;
