function Company() {
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
    };

    const headerStyle = {
        fontSize: '48px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        margin: '20px 0',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    };

    const sectionTitleStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#ffbb33',
        margin: '20px 0',
        borderBottom: '2px solid #ffbb33',
        padding: '10px 0',
    };

    const listStyle = {
        paddingLeft: '20px',
    };


    const highlightStyle = {
        color: '#ffbb33',
        fontWeight: 'bold',
        backgroundColor: '#222',
        borderRadius: 5,
        padding: '0 .2em'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Sobre a <span style={highlightStyle}>Costs</span></h1>
            <p>Bem-vindo à <span style={highlightStyle}>Costs</span>, sua parceira confiável em gerenciamento de projetos. No ambiente digital em constante evolução, a entrega eficaz de projetos é essencial para o crescimento e o sucesso do seu negócio. É aqui que entramos em ação.</p>

            <h2 style={sectionTitleStyle}>O Que Fazemos?</h2>
            <ul style={listStyle}>
                <li><span style={highlightStyle}>Planejamento Estratégico</span>: Desenvolvemos estratégias personalizadas que atendem às suas metas e objetivos de negócios. Nossa abordagem é baseada em análise de mercado, pesquisa e sólidos princípios de gerenciamento de projetos.</li>
                <li><span style={highlightStyle}>Design e Desenvolvimento</span>: Oferecemos o gerenciamento de projeto de alta qualidade e soluções que se destacam no cenário digital.</li>
                <li><span style={highlightStyle}>Gerenciamento de Projetos Ágil</span>: Utilizamos metodologias ágeis comprovadas para garantir que os projetos sejam entregues no prazo e dentro do orçamento. A transparência e a comunicação eficaz são nossas prioridades.</li>
                <li><span style={highlightStyle}>Otimização Contínua</span>: Não nos contentamos com o status quo. Monitoramos, avaliamos e otimizamos continuamente seu projeto para manter seu desempenho e relevância.</li>
                <li><span style={highlightStyle}>Suporte Técnico e Manutenção</span>: Fornecemos suporte técnico proativo e soluções de manutenção para garantir que sua gestão funcione sem problemas e esteja seguro contra ameaças.</li>
            </ul>

            <h2 style={sectionTitleStyle}>Por Que Escolher a <span style={highlightStyle}>Costs</span>?</h2>
            <p><span style={highlightStyle}>Experiência Comprovada</span>: Temos um histórico sólido de sucesso em gerenciamento de projetos para uma ampla gama de clientes.</p>
            <p><span style={highlightStyle}>Compromisso com a Qualidade</span>: Nosso compromisso com a excelência e a qualidade é evidente em cada projeto que entregamos.</p>
            <p><span style={highlightStyle}>Abordagem Personalizada</span>: Entendemos que cada negócio é único. Adaptamos nossos serviços para atender às necessidades específicas da sua empresa.</p>
            <p><span style={highlightStyle}>Resultados Mensuráveis</span>: Medimos o sucesso pelos resultados tangíveis que oferecemos aos nossos clientes.</p>
            <p><span style={highlightStyle}>Parceria de Longo Prazo</span>: Estamos comprometidos em construir relacionamentos duradouros com nossos clientes e acompanhá-los em sua jornada digital.</p>
        </div>
    );
}

export default Company;
