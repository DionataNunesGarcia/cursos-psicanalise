<?php

/**
 * Script de deploy automatizado para Pantheon.
 * Executa: Cache Rebuild -> Database Updates -> Config Import -> Cache Rebuild.
 */

function log_message($msg) {
  echo "\n[DEPLOY LOG]: $msg\n";
}

log_message("Iniciando esteira de deploy...");

// 1. Limpa o cache inicial para evitar conflitos de descoberta de plugins
log_message("Limpando cache inicial...");
passthru('drush cr');

// 2. Roda atualizações de banco de dados (equivalente ao seu script local)
log_message("Rodando atualizações de banco (updb)...");
passthru('drush updb -y');

// 3. Importa as configurações do diretório /config/default
log_message("Importando configurações (cim)...");
passthru('drush cim -y');

// 4. Limpa o cache final para garantir que tudo foi registrado
log_message("Finalizando com limpeza de cache...");
passthru('drush cr');

log_message("Deploy concluído com sucesso!");