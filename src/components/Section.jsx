import { forwardRef } from 'react';

const Section = forwardRef(function Section({ id, children }, ref) {
  return (
    <div ref={ref} id={id} className="min-h-screen flex flex-col items-center justify-center p-4">
      {children}
    </div>
  );
});

Section.displayName = 'Section';

export default Section;