import { Container, Skeleton } from "@shared";

const UserSkeleton = () => {
    return (
        <section>
            <div className="pb-[50px]">
                {/* Banner Skeleton */}
                <div className="relative h-60 w-full overflow-hidden">
                    <Skeleton className="w-full h-full" />
                </div>

                {/* Profile Section Skeleton */}
                <Container>
                    <div className="w-full max-w-5xl px-6 -mt-16 relative z-10">
                        <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                            <div className="mb-6 items-end">
                                <Skeleton className="w-32 h-32 rounded-full border-4 border-white shadow-md" />
                                <div className="ml-4 mt-[20px] pb-2">
                                    <Skeleton className="w-48 h-10 mb-4" />
                                    <div className="flex items-center space-x-6">
                                        <Skeleton className="w-32 h-6" />
                                        <Skeleton className="w-32 h-6" />
                                    </div>
                                </div>
                            </div>

                            {/* Bio Skeleton */}
                            <div className="mb-8">
                                <Skeleton className="w-full h-20" />
                            </div>

                            {/* Tabs Skeleton */}
                            <div className="border-b border-gray-200 mb-6">
                                <div className="flex space-x-8">
                                    <Skeleton className="w-20 h-10" />
                                    <Skeleton className="w-24 h-10" />
                                </div>
                            </div>

                            {/* Stories Grid Skeleton */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="flex flex-col gap-4">
                                        <Skeleton className="w-full h-48 rounded-lg" />
                                        <Skeleton className="w-full h-8" />
                                        <Skeleton className="w-3/4 h-8" />
                                        <Skeleton className="w-full h-4" />
                                        <Skeleton className="w-2/3 h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default UserSkeleton;
