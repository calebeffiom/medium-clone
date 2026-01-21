import { Container, Skeleton } from "@shared";

const BlogSkeleton = () => {
    return (
        <section>
            <div className="flex flex-col gap-11 py-[100px]">
                <Container>
                    <div className="flex flex-col gap-3 w-fit mx-auto">
                        <div className="flex flex-col gap-1">
                            <Skeleton className="w-[500px] h-14" />
                            <Skeleton className="w-[300px] h-10 mt-2" />
                        </div>

                        <div className="flex flex-row gap-2 mt-4">
                            <Skeleton className="h-[50px] w-[50px] rounded-full" />
                            <div className="flex flex-col gap-1">
                                <Skeleton className="w-32 h-6" />
                                <Skeleton className="w-48 h-4" />
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="w-[85%] h-[650px] mx-auto px-4 sm:px-6 lg:px-8">
                    <Skeleton className="h-full w-full rounded-xl" />
                </div>

                <Container>
                    <div className="flex flex-col gap-8 w-[80%] mx-auto">
                        <div className="flex flex-col gap-8 mx-auto w-full">
                            <Skeleton className="w-full h-6" />
                            <Skeleton className="w-full h-6" />
                            <Skeleton className="w-full h-6" />
                            <Skeleton className="w-4/5 h-6" />
                            <Skeleton className="w-full h-6" />
                            <Skeleton className="w-full h-6" />
                            <Skeleton className="w-3/4 h-6" />
                        </div>

                        <div className="w-full border-t-[2px] border-b-[2px] border-gray-100 py-4 flex justify-between mx-auto">
                            <div className="flex gap-4">
                                <Skeleton className="w-16 h-10 rounded-xl" />
                                <Skeleton className="w-16 h-10 rounded-xl" />
                            </div>
                            <Skeleton className="w-10 h-10 rounded-xl" />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default BlogSkeleton;
