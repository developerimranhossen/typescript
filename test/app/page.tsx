import List from "@/components/List";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "imran",
    }
  ]
  return (
    <>
      <p>home</p>
      {data.map(da => <List key={da.id} listData={da} />)}
    </>
  );
}
