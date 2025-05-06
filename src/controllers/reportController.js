const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");
const jogadorModel = require("./../models/jogadorModel");

const exportJogadorCSV = async (req, res) => {
    try {
        const jogadores = await jogadorModel.getAllJogadores();

        res.setHeader("Content-Disposition", "attachment; filename=jogadores.csv");
        res.setHeader("Content-Type", "text/csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        jogadores.forEach((jogador) => {
            csvStream.write({
                Id: jogador.id,
                Nome: jogador.name,
                Senha: jogador.password
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV" });
    }
};

const exportJogadorPDF = async (req, res) => {
    try {
        const jogadores = await jogadorModel.getAllJogadores();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=jogadores.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Jogadores", { align: "center" });
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Name | Idade | Gols", { underline: true });
        doc.moveDown(0.5);

        //Add dados dos jogadores
        jogadores.forEach((jogador) => {
            doc.text(
                `${jogador.id} | ${jogador.name} | ${jogador.age} | ${jogador.goals}`, 
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar PDF!" });
    }
};

module.exports = { exportJogadorPDF, exportJogadorCSV };