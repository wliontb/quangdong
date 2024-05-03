<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

final class StatusComment extends Enum
{
    const ACTIVE = 1;           // Hiện
    const INACTIVE = 2;         // Ẩn
    const UNREPLIED = 3;        // Chưa rep
    const REPLIED = 4;          // Đã rep
}
