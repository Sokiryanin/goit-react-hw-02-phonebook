import { Wrapper } from './Sections.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      {children}
    </Wrapper>
  );
};
