import Button from "@/components/ui/Button";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  console.log("db:", process.env.UPSTASH_REDIS_REST_TOKEN)
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
};

export default page;
