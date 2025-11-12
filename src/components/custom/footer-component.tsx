import { Button } from "../ui/button"
import { Instagram, Twitter, Facebook } from 'lucide-react';


const FooterComponent = () => {
    return (
        <div className="flex flex-col p-4 items-center gap-7">
            <h1 className="text-white text-3xl text-center">
                Meet Vortex Academia Today
            </h1>
            <h2 className="text-white text-3xl text-center">
                Join Us for Free
            </h2>
            <Button >
                Join Vortex Free
            </Button>
            <h3>©2025 Vortex Academia</h3>
            <div className="flex flex-row gap-4 justify-center">
                <Instagram />
                <Twitter />
                <Facebook />
            </div>
        </div>
    )
}

export default FooterComponent