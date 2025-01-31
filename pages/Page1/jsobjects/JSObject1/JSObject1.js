export default {
	nome: "Fulano",
	idade: 33,
	filiacao: {
		pai: "Arnaldo",
		mae: "Ana"
	},
	minhaFuncao () {
		return "Olá Mundo!";
	},
	async fetchData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  },
	hash() {
    var md = forge.md.sha256.create();
    md.update("The quick brown fox jumps over the lazy dog");
    return md.digest().toHex();
  },
	generatePDF: () => {       				
    // Criar um novo documento PDF
    const doc = new jspdf.jsPDF();
				
    // Adicionar um título ao PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Relatório de Desempenho", 20, 20);

    // Adicionar um parágrafo
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text("Este é um relatório gerado automaticamente via Appsmith.", 20, 40);
		
		return doc.output("dataurlstring");		
  }
}