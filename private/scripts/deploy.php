<?php
passthru('drush cr');
passthru('drush updb -y');
passthru('drush cim -y');
passthru('drush cr');