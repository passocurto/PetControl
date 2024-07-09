
export default async function Page({ params })  {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const data = await res.json();
    return <>
        <h1>{data.id}</h1>
    <h1> ID: {params.id} </h1></>

}
