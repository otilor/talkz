import News from "./News";
import { Text } from "@chakra-ui/layout";

function ShowNews() {
    return (<div>
        <Text color="gray.500" class="text-xl text-center">
                Recent posts
        </Text>
        <News />
    </div>
    );
}

export default ShowNews;