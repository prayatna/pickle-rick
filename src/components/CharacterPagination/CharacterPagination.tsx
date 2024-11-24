"use client";
import { HStack } from "@chakra-ui/react";
import React from "react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { CharactersQueryInfo } from "@/graphql/characters";

export default function CharacterPagination({
  pageInfo,
}: {
  pageInfo: CharactersQueryInfo;
}) {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <PaginationRoot
      count={pageInfo.count}
      pageSize={20}
      getHref={(p) => {
        console.log("Current page:", p);
        return `?page=${p}`;
      }}
      page={currentPage}
      onPageChange={(e) => {
        console.log(e + "on page change");
        setCurrentPage(e.page);
      }}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
}
