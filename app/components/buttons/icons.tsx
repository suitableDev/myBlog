interface Props{
  color: string
}

export const SunIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
        <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" />
    </svg>
  )
}

export const MoonIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="black"
    >
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    </svg>
  )
}

export const HomeIcon = ({color}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="24px"
      height="24px"
      fill={color}
    >
      <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.070312 4.3222656 L 8.8730469 15.521484 C 7.0935305 16.919676 6 19.100391 6 21.400391 L 6 40.5 C 6 41.133333 6.2367979 41.80711 6.7148438 42.285156 C 7.1928895 42.763202 7.8666667 43 8.5 43 L 18.5 43 C 19.133333 43 19.80711 42.763202 20.285156 42.285156 C 20.763202 41.80711 21 41.133333 21 40.5 L 21 30.5 C 21 30.218182 21.218182 30 21.5 30 L 26.5 30 C 26.781818 30 27 30.218182 27 30.5 L 27 40.5 C 27 41.133333 27.236798 41.80711 27.714844 42.285156 C 28.19289 42.763202 28.866667 43 29.5 43 L 39.5 43 C 40.133333 43 40.80711 42.763202 41.285156 42.285156 C 41.763202 41.80711 42 41.133333 42 40.5 L 42 21.400391 C 42 19.155946 41.012069 16.901298 39.087891 15.490234 L 24.929688 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.271484 17.876953 A 1.50015 1.50015 0 0 0 37.3125 17.910156 C 38.388318 18.699095 39 20.044835 39 21.400391 L 39 40 L 30 40 L 30 30.5 C 30 28.581818 28.418182 27 26.5 27 L 21.5 27 C 19.581818 27 18 28.581818 18 30.5 L 18 40 L 9 40 L 9 21.400391 C 9 20.100391 9.7060794 18.680715 10.726562 17.878906 A 1.50015 1.50015 0 0 0 10.728516 17.876953 L 24 7.4101562 z" />
    </svg>
  )
}

export const TagsIcon = ({color}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="24px"
      height="24px"
      fill={color}
    >
  <rect fill="none" height="48" width="48"/><circle cx="39" cy="11" fill="none" r="3" stroke={color}/>
  <path d="M47,5.5  C47,4.119,45.881,3,44.5,3c-0.156,0-14.876,0.002-14.876,0.002c-1.33,0-2.603-0.07-3.341,0.668L3.554,26.398  c-0.739,0.738-0.739,1.936,0,2.674l17.374,17.374c0.738,0.738,1.936,0.738,2.674,0L46.33,23.717c0.738-0.737,0.668-1.98,0.668-3.34  C46.998,20.377,47,5.656,47,5.5z" fill="none" stroke={color} stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
  </svg>

  )
}
