export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-4xl uppercase px-8 py-4 w-auto';
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-hover',
    cta: 'bg-text-default text-text-on-dark hover:bg-[#222222] hover:text-text-on-dark',
  };
  return (
    <button
      type={props.type || 'button'}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}