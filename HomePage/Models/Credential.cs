﻿using System;
using System.Collections.Generic;

namespace HomePage.Models;

public partial class Credential
{
    public int Uid { get; set; }

    public string? UserName { get; set; }

    public string? Password { get; set; }
}
