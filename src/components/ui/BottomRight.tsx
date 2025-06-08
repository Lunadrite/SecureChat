export default function BottomRight(props: any) {
  return (
    <svg
      width={254}
      height={252}
      viewBox="0 0 254 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_4656_3227)">
        <path
          d="M80.5678 103.096C80.5637 9.5722 197.268 -4.028 255.621 0.862293L260.406 0.862084L262.012 251.97L4.01169 251.981C29.5321 241.321 80.5719 196.619 80.5678 103.096Z"
          fill="url(#paint0_radial_4656_3227)"
        />
        <path
          d="M80.5678 103.096C80.5637 9.5722 197.268 -4.028 255.621 0.862293L260.406 0.862084L262.012 251.97L4.01169 251.981C29.5321 241.321 80.5719 196.619 80.5678 103.096Z"
          fill="#BABABA"
          fillOpacity={0.2}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4656_3227"
          x={0.0117188}
          y={0.00146484}
          width={266}
          height={259.98}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4656_3227"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4656_3227"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_4656_3227"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(133.006 125.991) rotate(-90.0025) scale(125.985 129)"
        >
          <stop stopColor="#377BAD" />
          <stop offset={1} stopColor="#2759A3" />
        </radialGradient>
      </defs>
    </svg>
  );
}
