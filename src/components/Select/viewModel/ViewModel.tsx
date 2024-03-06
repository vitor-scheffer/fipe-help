import { useState } from "react";
import { CarItem } from "../../../data/models/car";

export const useSelectViewModel = () => {
  const [textTitle, setTextTitle] = useState<string | undefined>(undefined);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [optionsFiltered, setOptionsFiltered] = useState<
    Array<CarItem> | undefined
  >(undefined);

  const onSelectCell = (item: CarItem) => {
    setTextTitle(item.nome);
    setShowOptions(false);
    setSelected(item.codigo);
    setSearchText('');
  };

  const onClearSelect = (title: string) => {
    setTextTitle(title);
    setSelected("");
  };

  return {
    textTitle,
    setTextTitle,
    showOptions,
    setShowOptions,
    selected,
    setSelected,
    onSelectCell,
    onClearSelect,
    searchText,
    setSearchText,
    optionsFiltered,
    setOptionsFiltered
  };
};
