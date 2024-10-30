import { useParams } from "next/navigation";

export function isPathActive() {
    const { path } = useParams();
    
}