export default function TopLeft(props: any) {
  return (
    <svg
      width={269}
      height={241}
      viewBox="0 0 269 241"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_4656_3228)">
        <path
          d="M186.36 137.674C186.36 224.156 66.4889 236.727 6.55332 232.203H1.63833L0 0H265C238.787 9.85691 186.36 51.1913 186.36 137.674Z"
          fill="url(#paint0_radial_4656_3228)"
        />
        <path
          d="M186.36 137.674C186.36 224.156 66.4889 236.727 6.55332 232.203H1.63833L0 0H265C238.787 9.85691 186.36 51.1913 186.36 137.674Z"
          fill="#FF2B2B"
          fillOpacity={0.2}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4656_3228"
          x={-4}
          y={0}
          width={273}
          height={241}
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
            result="effect1_dropShadow_4656_3228"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4656_3228"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_4656_3228"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(132.5 116.5) rotate(90) scale(116.5 132.5)"
        >
          <stop stopColor="#377BAD" />
          <stop offset={1} stopColor="#2759A3" />
        </radialGradient>
      </defs>
    </svg>
  );
}
