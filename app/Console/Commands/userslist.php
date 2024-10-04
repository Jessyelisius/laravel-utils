<?php

namespace App\Console\Commands;
namespace App\Helpers;

use Illuminate\Console\Command;

class userslist extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:userslist';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info(helperClass::greetings());
    }
}
