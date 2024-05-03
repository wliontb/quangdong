<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

final class StatusOrder extends Enum
{
    const CANCEL = 0;
    const SUCCESS = 1;
    const PENDING = 2;
    const DELIVERING = 3;
}
