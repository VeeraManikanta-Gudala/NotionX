import { Button } from "@/components/ui/button"
import  Logo  from "./logo"

const Footer = () => {
    return (
        <div className="flex items-center w-full p-6">
            <Logo></Logo>
            {/* <h1>Footerx</h1> */}
            <div className="md:ml-auto w-full justify-between md:justify-end text-muted-foreground flex items-center ">
                <Button variant={"ghost"}>Privacy policy</Button>
                <Button variant={"ghost"}>Terms and conditions</Button>
            </div>
        </div>

    )    

}
export default Footer;