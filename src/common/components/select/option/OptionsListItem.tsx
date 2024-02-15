interface Props {
  value: string;
  selectOption: (value: string) => void;
}

const OptionsListItem = ({ value, selectOption }: Props) => {
  return (
    <div
      key={value}
      css={{
        display: "flex",
        alignItems: "center",
        height: "40px",
        padding: "0 16px",
      }}
      onClick={(e) => {
        e.preventDefault();
        selectOption(value);
      }}
    >
      {value}
    </div>
  );
};

export default OptionsListItem;
