
import AspiraIconLogo from "./aspira-icon"
export default function LoadingBar() {
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <AspiraIconLogo />
            <div className="loader">
                <div className="bar"></div>
            </div>
        </div>
    )
}
