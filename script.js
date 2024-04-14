function realizarBackup(){
    var pastaOrigem = DriveApp.getFolderById("id da pasta de origem");
    var pastaDestino = DriveApp.getFolderById("id da pasta de Destino");

    var data = new Date();
    var nomeBackup = "Backup_" + Utilities.formaDate(data, "GMT", "yyyy-MM-dd HH:mm:ss");

    var pastaCopia = pastaDestino.createFolder(nomeBackup);

    copiarConteudo(pastaOrigem, pastaCopia);

    function copiarConteudo(origem, destino){
        var arquivo = origem.getFiles();
        while (arquivos.hasNext()){
            var arquivo = arquivo.next();
            arquivo.makeCopy(arquivo.getName(), destino);            
        }
        var subPastas = origem.getFolders();
        while (subPastas.hasNext()){
            var subPasta = subPastas.next();
            var subPastaCopia = destino.createFolder(subPasta.getName());
            copiarConteudo(subPasta, subPastaCopia);
    }
}
}


function enviarRelatorioDiario() {
    let dstinatario = "email.com.br";
    let assunto = "Daily";
    let dataAtual = new Date();
    let dataAnterior = new Date(dataAtual);
    dataAnterior.setDate(dataHoje.getDate() - 1);

    let totalDeVendas = Math.floor(math.random() * 10000) + 1000;
    let numeroPedidos = Math.floor(Math.random() * 50) + 10;
    let mensgaem = "Relatorio de vendas para " + Utililities.formatDate(dataAnterior, "GMT" , "dd/MM/yyyy") + ":\n\n";

    mensagem += "Total de Vendas: $" + totalDeVendas.toFixed(2) + "\n";
    mensagem += "numero de Pedidos: " + numeroPedidos + "n";
    MailApp.sendEmail (destinatarios, assunto, mensagem);

}