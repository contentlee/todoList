interface Props {
  value: string;
}

const ListCardCategory = ({ value }: Props) => {
  return (
    <span>
      {`<`}
      {value}
      {`>`}
    </span>
  );
};

export default ListCardCategory;
