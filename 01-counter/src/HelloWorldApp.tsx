export function HelloWorldApp({ name , subtitle= 'This is a simple React component.'}: { name: string , subtitle?: string }) {
    return (
        <>
            <h1 data-testid="test-title">Hello {name}</h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
        </>
    );
}