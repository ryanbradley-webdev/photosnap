export default function MenuIcon({
    menuVisible
}: {
    menuVisible: boolean
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="6"
            data-visible={!menuVisible}
            style={{
                left: menuVisible ? '-150%' : '50%',
                opacity: menuVisible ? '0' : '1'
            }}
        >
            <g fillRule="evenodd">
                <path d="M0 0h20v1H0zM0 5h20v1H0z"/>
            </g>
        </svg>
    )
}