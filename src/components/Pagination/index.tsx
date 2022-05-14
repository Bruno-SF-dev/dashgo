import { Box, Stack, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      mt="8"
      direction={["column", "row"]}
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack>
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </HStack>
    </Stack>
  );
}
