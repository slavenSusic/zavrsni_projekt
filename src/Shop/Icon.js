function Icon(props) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="M26 57 A6 6 0 0 1 20 63 A6 6 0 0 1 14 57 A6 6 0 0 1 26 57 z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="M50 57 A6 6 0 0 1 44 63 A6 6 0 0 1 38 57 A6 6 0 0 1 50 57 z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="M26 57h12M14 57L10 2H0M13 43l43-3 7-30H11M20 10l2-6h10l2 6"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="M32 4l5-3h16l3 9"
        />
      </svg>
    );
  }
  
  export default Icon;