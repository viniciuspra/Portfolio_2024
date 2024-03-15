interface SvgProps {
  size?: string;
}

export default function Icon({ size = "40" }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary group"
    >
      <rect x="1" y="1" width="62" height="62" rx="31" className="fill-card" />
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="31"
        className="stroke-card-stroke group-hover:stroke-primary transition-colors"
        strokeWidth="2"
      />
      <path
        d="M12 23.9149C12 21.7998 13.7147 20.0851 15.8298 20.0851C17.9449 20.0851 19.6596 21.7998 19.6596 23.9149C19.6596 26.03 17.9449 27.7447 15.8298 27.7447C13.7147 27.7447 12 26.03 12 23.9149Z"
        className="fill-primary"
      />
      <path
        d="M12 32C12 29.8849 13.7147 28.1702 15.8298 28.1702C17.9449 28.1702 19.6596 29.8849 19.6596 32C19.6596 34.1151 17.9449 35.8298 15.8298 35.8298C13.7147 35.8298 12 34.1151 12 32Z"
        className="fill-primary"
      />
      <path
        d="M12 40.0851C12 37.97 13.7147 36.2553 15.8298 36.2553C17.9449 36.2553 19.6596 37.97 19.6596 40.0851C19.6596 42.2002 17.9449 43.9149 15.8298 43.9149C13.7147 43.9149 12 42.2002 12 40.0851Z"
        className="fill-primary"
      />
      <path
        d="M20.0851 15.8298C20.0851 13.7147 21.7998 12 23.9149 12C26.03 12 27.7447 13.7147 27.7447 15.8298C27.7447 17.9449 26.03 19.6596 23.9149 19.6596C21.7998 19.6596 20.0851 17.9449 20.0851 15.8298Z"
        className="fill-primary"
      />
      <path
        d="M20.0851 23.9149C20.0851 21.7998 21.7998 20.0851 23.9149 20.0851C26.03 20.0851 27.7447 21.7998 27.7447 23.9149C27.7447 26.03 26.03 27.7447 23.9149 27.7447C21.7998 27.7447 20.0851 26.03 20.0851 23.9149Z"
        className="fill-primary"
      />
      <path
        d="M20.0851 32C20.0851 29.8849 21.7998 28.1702 23.9149 28.1702C26.03 28.1702 27.7447 29.8849 27.7447 32C27.7447 34.1151 26.03 35.8298 23.9149 35.8298C21.7998 35.8298 20.0851 34.1151 20.0851 32Z"
        className="fill-primary"
      />
      <path
        d="M20.0851 40.0851C20.0851 37.97 21.7998 36.2553 23.9149 36.2553C26.03 36.2553 27.7447 37.97 27.7447 40.0851C27.7447 42.2002 26.03 43.9149 23.9149 43.9149C21.7998 43.9149 20.0851 42.2002 20.0851 40.0851Z"
        className="fill-primary"
      />
      <path
        d="M20.0851 48.1702C20.0851 46.0551 21.7998 44.3404 23.9149 44.3404C26.03 44.3404 27.7447 46.0551 27.7447 48.1702C27.7447 50.2853 26.03 52 23.9149 52C21.7998 52 20.0851 50.2853 20.0851 48.1702Z"
        className="fill-primary"
      />
      <path
        d="M28.1702 15.8298C28.1702 13.7147 29.8849 12 32 12C34.1151 12 35.8298 13.7147 35.8298 15.8298C35.8298 17.9449 34.1151 19.6596 32 19.6596C29.8849 19.6596 28.1702 17.9449 28.1702 15.8298Z"
        className="fill-primary"
      />
      <path
        d="M28.1702 23.9149C28.1702 21.7998 29.8849 20.0851 32 20.0851C34.1151 20.0851 35.8298 21.7998 35.8298 23.9149C35.8298 26.03 34.1151 27.7447 32 27.7447C29.8849 27.7447 28.1702 26.03 28.1702 23.9149Z"
        className="fill-primary"
      />
      <path
        d="M28.1702 32C28.1702 29.8849 29.8849 28.1702 32 28.1702C34.1151 28.1702 35.8298 29.8849 35.8298 32C35.8298 34.1151 34.1151 35.8298 32 35.8298C29.8849 35.8298 28.1702 34.1151 28.1702 32Z"
        className="fill-primary"
      />
      <path
        d="M28.1702 40.0851C28.1702 37.97 29.8849 36.2553 32 36.2553C34.1151 36.2553 35.8298 37.97 35.8298 40.0851C35.8298 42.2002 34.1151 43.9149 32 43.9149C29.8849 43.9149 28.1702 42.2002 28.1702 40.0851Z"
        className="fill-primary"
      />
      <path
        d="M28.1702 48.1702C28.1702 46.0551 29.8849 44.3404 32 44.3404C34.1151 44.3404 35.8298 46.0551 35.8298 48.1702C35.8298 50.2853 34.1151 52 32 52C29.8849 52 28.1702 50.2853 28.1702 48.1702Z"
        className="fill-primary"
      />
      <path
        d="M36.2553 15.8298C36.2553 13.7147 37.97 12 40.0851 12C42.2002 12 43.9149 13.7147 43.9149 15.8298C43.9149 17.9449 42.2002 19.6596 40.0851 19.6596C37.97 19.6596 36.2553 17.9449 36.2553 15.8298Z"
        className="fill-primary"
      />
      <path
        d="M36.2553 23.9149C36.2553 21.7998 37.97 20.0851 40.0851 20.0851C42.2002 20.0851 43.9149 21.7998 43.9149 23.9149C43.9149 26.03 42.2002 27.7447 40.0851 27.7447C37.97 27.7447 36.2553 26.03 36.2553 23.9149Z"
        className="fill-primary"
      />
      <path
        d="M36.2553 32C36.2553 29.8849 37.97 28.1702 40.0851 28.1702C42.2002 28.1702 43.9149 29.8849 43.9149 32C43.9149 34.1151 42.2002 35.8298 40.0851 35.8298C37.97 35.8298 36.2553 34.1151 36.2553 32Z"
        className="fill-primary"
      />
      <path
        d="M36.2553 40.0851C36.2553 37.97 37.97 36.2553 40.0851 36.2553C42.2002 36.2553 43.9149 37.97 43.9149 40.0851C43.9149 42.2002 42.2002 43.9149 40.0851 43.9149C37.97 43.9149 36.2553 42.2002 36.2553 40.0851Z"
        className="fill-primary"
      />
      <path
        d="M36.2553 48.1702C36.2553 46.0551 37.97 44.3404 40.0851 44.3404C42.2002 44.3404 43.9149 46.0551 43.9149 48.1702C43.9149 50.2853 42.2002 52 40.0851 52C37.97 52 36.2553 50.2853 36.2553 48.1702Z"
        className="fill-primary"
      />
      <path
        d="M44.3404 23.9149C44.3404 21.7998 46.0551 20.0851 48.1702 20.0851C50.2853 20.0851 52 21.7998 52 23.9149C52 26.03 50.2853 27.7447 48.1702 27.7447C46.0551 27.7447 44.3404 26.03 44.3404 23.9149Z"
        className="fill-primary"
      />
      <path
        d="M44.3404 32C44.3404 29.8849 46.0551 28.1702 48.1702 28.1702C50.2853 28.1702 52 29.8849 52 32C52 34.1151 50.2853 35.8298 48.1702 35.8298C46.0551 35.8298 44.3404 34.1151 44.3404 32Z"
        className="fill-primary"
      />
      <path
        d="M44.3404 40.0851C44.3404 37.97 46.0551 36.2553 48.1702 36.2553C50.2853 36.2553 52 37.97 52 40.0851C52 42.2002 50.2853 43.9149 48.1702 43.9149C46.0551 43.9149 44.3404 42.2002 44.3404 40.0851Z"
        className="fill-primary"
      />
    </svg>
  );
}