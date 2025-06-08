export default function TopRight(props: any) {
  return (
    <svg
      width={261}
      height={329}
      viewBox="0 0 261 329"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_4656_3226)">
        <path
          d="M109.033 224.661C12.3709 223.732 -0.289839 79.0033 5.46259 6.75534L5.51961 0.826689L265.074 1.34668L262 321C251.287 289.275 205.695 225.591 109.033 224.661Z"
          fill="url(#paint0_radial_4656_3226)"
        />
        <path
          d="M109.033 224.661C12.3709 223.732 -0.289839 79.0033 5.46259 6.75534L5.51961 0.826689L265.074 1.34668L262 321C251.287 289.275 205.695 225.591 109.033 224.661Z"
          fill="#8AF700"
          fillOpacity={0.2}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4656_3226"
          x={0.296875}
          y={0.82666}
          width={268.777}
          height={328.173}
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
            result="effect1_dropShadow_4656_3226"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4656_3226"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_4656_3226"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(133.324 159.921) rotate(-179.449) scale(130.219 159.834)"
        >
          <stop stopColor="#377BAD" />
          <stop offset={1} stopColor="#2759A3" />
        </radialGradient>
      </defs>
    </svg>
  );
}
