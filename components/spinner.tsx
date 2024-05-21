import Image from "next/image";
import spinnerIcon from "../public/images/spinner.svg";

function Spinner({ marginTop = 0 }: { marginTop?: number }) {
    return (
        <div className='flex justify-center' style={{ marginTop: `${marginTop}px` }}>
            <Image
                src={spinnerIcon}
                alt="Follow us on Twitter"
            />
        </div>
    )
}

export default Spinner