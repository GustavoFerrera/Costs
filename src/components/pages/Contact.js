function Contact () {
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
    };

    const sectionTitleStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#333',
        margin: '20px 0',
        borderBottom: '2px solid #ffbb33',
        padding: '10px 0',
        textAlign: 'center'
    };

    const highlightStyle = {
        color: '#ffbb33',
        fontWeight: 'bold',
        backgroundColor: '#222',
        borderRadius: 2,
        padding: '0 .2em'
    };
    return (
        
        <div style={containerStyle}>
            <h2 style={sectionTitleStyle}>Entre em Contato Conosco</h2>
            <p>Se você está pronto para levar seu projeto para o próximo nível, estamos aqui para ajudar. Entre em contato com a <span style={highlightStyle}>Costs</span> hoje mesmo e descubra como nossa experiência em gerenciamento de projetos pode impulsionar o sucesso do seu negócio.</p>
            <p>Não deixe seus projetos ao acaso. Escolha a <span style={highlightStyle}>Costs</span> e garanta uma execução eficaz e eficiente, desde o conceito até o lançamento. Estamos ansiosos para trabalhar com você!</p>
        </div>
    )
}
export default Contact