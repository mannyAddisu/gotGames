import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  text: string;
}
const ExpandText = ({ text }: Props) => {
  const [expand, setExpand] = useState(false);
  const limit = 300;
  if (!text) return null;
  if (text.length <= limit) return <Text>{text}</Text>;
  const summary = !expand ? text.slice(0, limit) + "..." : text;
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        marginStart={1}
        onClick={() => setExpand(!expand)}
      >
        {expand ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandText;
