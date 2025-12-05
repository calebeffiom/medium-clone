import { Navbar } from "@/components/shared";
export default function MainAppLayout({ children }: { children: React.ReactNode }) {
    // 3. Render the Layout (Only if status is 'unauthenticated')
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}
